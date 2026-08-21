import { getSettings } from "@/lib/admin-data";
import { saveSettingsAction } from "../../actions";

const field = "rounded-md border border-[#211f1a]/15 bg-white px-3 py-2 text-[#211f1a] outline-none focus:border-[#ba923a]";
const labelClass = "text-sm text-[#5b564c]";

export default async function AdminSettingsPage() {
  const row = await getSettings("contact");
  const v = (row?.value ?? {}) as Record<string, string>;

  return (
    <div>
      <h1 className="mb-2 font-['Instrument_Serif',serif] text-3xl">Settings</h1>
      <p className="mb-6 text-sm text-[#948d7e]">
        Manage contact information and social media links displayed in the footer.
      </p>

      <form action={saveSettingsAction} className="flex flex-col gap-5">
        <input type="hidden" name="key" value="contact" />

        <fieldset className="rounded-lg border border-[#211f1a]/10 bg-white p-6">
          <legend className="font-['Instrument_Serif',serif] text-lg px-2">Contact Information</legend>
          <div className="grid gap-5 sm:grid-cols-2 mt-4">
            <div className="flex flex-col gap-1">
              <label className={labelClass} htmlFor="phone">Phone</label>
              <input id="phone" name="phone" defaultValue={v.phone ?? ""} className={field} placeholder="(305) 827-1772" />
            </div>
            <div className="flex flex-col gap-1">
              <label className={labelClass} htmlFor="email">Email</label>
              <input id="email" name="email" type="email" defaultValue={v.email ?? ""} className={field} placeholder="info@childrensparadise.com" />
            </div>
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className={labelClass} htmlFor="address">Address / Location</label>
              <input id="address" name="address" defaultValue={v.address ?? ""} className={field} placeholder="Hialeah &amp; Miami Lakes, FL" />
            </div>
          </div>
        </fieldset>

        <fieldset className="rounded-lg border border-[#211f1a]/10 bg-white p-6">
          <legend className="font-['Instrument_Serif',serif] text-lg px-2">Social Media</legend>
          <div className="grid gap-5 sm:grid-cols-2 mt-4">
            <div className="flex flex-col gap-1">
              <label className={labelClass} htmlFor="instagram">Instagram URL</label>
              <input id="instagram" name="instagram" type="url" defaultValue={v.instagram ?? ""} className={field} placeholder="https://instagram.com/..." />
            </div>
            <div className="flex flex-col gap-1">
              <label className={labelClass} htmlFor="facebook">Facebook URL</label>
              <input id="facebook" name="facebook" type="url" defaultValue={v.facebook ?? ""} className={field} placeholder="https://facebook.com/..." />
            </div>
          </div>
        </fieldset>

        <div>
          <button
            type="submit"
            className="rounded-md bg-[#ba923a] px-5 py-2 font-medium text-white hover:opacity-90"
          >
            Save settings
          </button>
        </div>
      </form>
    </div>
  );
}
