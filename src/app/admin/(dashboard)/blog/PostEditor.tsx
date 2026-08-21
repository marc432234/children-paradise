import { marked } from "marked";
import type { BlogRow, CategoryRow } from "@/lib/admin-data";
import { listCategories } from "@/lib/admin-data";
import { deletePostAction, savePostAction } from "../../actions";
import { PostBodyEditor } from "./PostBodyEditor";
import { DeleteButton, SaveButton } from "./PostEditorButtons";

const field = "rounded-md border border-[#211f1a]/15 bg-white px-3 py-2 text-[#211f1a] outline-none focus:border-[#ba923a]";
const labelClass = "text-sm text-[#5b564c]";

export async function PostEditor({ post }: { post?: BlogRow }) {
  const isNew = !post;
  const dateValue = post?.date ? post.date.slice(0, 10) : new Date().toISOString().slice(0, 10);
  const allCategories: CategoryRow[] = await listCategories();
  const selected = new Set(post?.categories ?? []);
  const initialBodyHtml = post?.body ? await marked.parse(post.body) : "";

  return (
    <div>
      <h1 className="mb-8 font-['Instrument_Serif',serif] text-3xl">{isNew ? "New post" : "Edit post"}</h1>

      <form action={savePostAction} className="flex flex-col gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label className={labelClass} htmlFor="title">Title</label>
            <input id="title" name="title" required defaultValue={post?.title} className={field} />
          </div>
          <div className="flex flex-col gap-1">
            <label className={labelClass} htmlFor="slug">Slug</label>
            <input
              id="slug"
              name="slug"
              required
              defaultValue={post?.slug}
              readOnly={!isNew}
              className={`${field} ${!isNew ? "opacity-60" : ""}`}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className={labelClass} htmlFor="date">Date</label>
            <input id="date" name="date" type="date" defaultValue={dateValue} className={field} />
          </div>
          <fieldset className="flex flex-col gap-1">
            <legend className={labelClass}>Categories</legend>
            <div className="flex flex-wrap gap-3">
              {allCategories.length === 0 && (
                <span className="text-sm text-[#948d7e]">No categories yet. Add them in Supabase.</span>
              )}
              {allCategories.map((cat) => (
                <label
                  key={cat.slug}
                  className="flex cursor-pointer items-center gap-2 rounded-md border border-[#211f1a]/15 bg-white px-3 py-2 text-sm text-[#5b564c] hover:border-[#ba923a] has-checked:border-[#ba923a] has-checked:bg-[#ba923a]/10"
                >
                  <input
                    type="checkbox"
                    name="categories"
                    value={cat.slug}
                    defaultChecked={selected.has(cat.slug)}
                    className="accent-[#ba923a]"
                  />
                  {cat.name}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="flex flex-col gap-1">
          <label className={labelClass} htmlFor="featuredImage">Featured image</label>
          <input type="hidden" name="currentFeaturedImage" value={post?.featured_image ?? ""} />
          <input
            id="featuredImage"
            name="featuredImage"
            type="file"
            accept="image/*"
            className={field}
          />
          {post?.featured_image && (
            <img
              src={post.featured_image}
              alt="Current featured image"
              className="mt-2 h-32 w-48 rounded border border-[#211f1a]/10 object-cover"
            />
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className={labelClass}>Body</label>
          <PostBodyEditor initialHtml={initialBodyHtml} />
        </div>

        <div className="flex items-center gap-3">
          <SaveButton isNew={isNew} />
        </div>
      </form>

      {!isNew && (
        <form action={deletePostAction} className="mt-6 border-t border-[#211f1a]/10 pt-6">
          <input type="hidden" name="slug" value={post.slug} />
          <DeleteButton title={post.title} />
        </form>
      )}
    </div>
  );
}
