"use client";

import { useState } from "react";
import Swal from "sweetalert2";

const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/15991773/4ti7gco/";

export default function ContactForm({ formSource = "contact", onSuccess, variant = "page" }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email.";
    }
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please fill in all required fields.",
        confirmButtonColor: "#b98a2e",
      });
      return;
    }

    setSending(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify({ ...form, formSource }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Network response was not ok");

      Swal.fire({
        icon: "success",
        title: formSource === "admission" ? "Request Sent!" : "Message Sent!",
        text: "Thank you for reaching out. We'll get back to you shortly.",
        confirmButtonColor: "#b98a2e",
      });
      setForm({ firstName: "", lastName: "", email: "", phone: "", interest: "", location: "", message: "" });
      onSuccess?.();
    } catch {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again later or contact us directly.",
        confirmButtonColor: "#b98a2e",
      });
    } finally {
      setSending(false);
    }
  }

  const fieldClass = (name) =>
    `form-field${variant === "modal" ? " rounded-[8px] px-6 py-5 text-[18px]" : ""}${errors[name] ? " border-red-500" : ""}`;
  const labelClass = variant === "modal" ? "sr-only" : "block text-[13px] font-medium text-[#5b564c] mb-1.5";
  const prefix = formSource === "admission" ? "admission-" : "contact-";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className={`flex flex-col md:flex-row ${variant === "modal" ? "gap-4 md:gap-6" : "gap-4"}`}>
        <div className="flex-1">
          <label htmlFor={`${prefix}first-name`} className={labelClass}>First Name *</label>
          <input id={`${prefix}first-name`} name="firstName" type="text" placeholder="First Name" value={form.firstName} onChange={handleChange} autoComplete="given-name" className={fieldClass("firstName")} />
          {errors.firstName && <p className="text-red-500 text-[12px] mt-1 m-0">{errors.firstName}</p>}
        </div>
        <div className="flex-1">
          <label htmlFor={`${prefix}last-name`} className={labelClass}>Last Name *</label>
          <input id={`${prefix}last-name`} name="lastName" type="text" placeholder="Last Name" value={form.lastName} onChange={handleChange} autoComplete="family-name" className={fieldClass("lastName")} />
          {errors.lastName && <p className="text-red-500 text-[12px] mt-1 m-0">{errors.lastName}</p>}
        </div>
      </div>
      <div className={`flex flex-col md:flex-row ${variant === "modal" ? "gap-4 md:gap-6" : "gap-4"}`}>
        <div className="flex-1">
          <label htmlFor={`${prefix}email`} className={labelClass}>Email Address *</label>
          <input id={`${prefix}email`} name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} autoComplete="email" className={fieldClass("email")} />
          {errors.email && <p className="text-red-500 text-[12px] mt-1 m-0">{errors.email}</p>}
        </div>
        <div className="flex-1">
          <label htmlFor={`${prefix}phone`} className={labelClass}>Phone Number</label>
          <input id={`${prefix}phone`} name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} autoComplete="tel" className={fieldClass("phone")} />
        </div>
      </div>
      <div className={`flex flex-col md:flex-row ${variant === "modal" ? "gap-4 md:gap-6" : "gap-4"}`}>
        <div className="flex-1">
          <label htmlFor={`${prefix}interest`} className={labelClass}>I&apos;m Interested In</label>
          <div className="select-wrap">
            <select id={`${prefix}interest`} name="interest" value={form.interest} onChange={handleChange} className={fieldClass("interest")}>
              <option value="" disabled>I&apos;m Interested In</option>
              <option value="early-learning">Early Learning</option>
              <option value="elementary">Elementary</option>
              <option value="junior-high">Junior High</option>
              <option value="high-school">High School</option>
              <option value="general">General Enquiry</option>
            </select>
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor={`${prefix}location`} className={labelClass}>Preferred Location</label>
          <div className="select-wrap">
            <select id={`${prefix}location`} name="location" value={form.location} onChange={handleChange} className={fieldClass("location")}>
              <option value="" disabled>Preferred Location</option>
              <option value="1">CP Learning Academy #1 &mdash; Hialeah</option>
              <option value="2">CP Learning Academy #2 &mdash; Hialeah</option>
              <option value="3">CP Learning Academy #3 &mdash; Hialeah</option>
              <option value="4">CP Learning Academy #4 &mdash; Hialeah</option>
              <option value="5">CP Learning Academy #5 &mdash; Miami Lakes</option>
              <option value="6">CP Learning Academy #6 &mdash; Hialeah</option>
              <option value="7">Aladdin&apos;s Paradise Academy &mdash; Hialeah</option>
              <option value="8">CP Learning Academy #8 &mdash; Hialeah</option>
              <option value="9">CP Learning Academy #9 &mdash; Miami Lakes</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor={`${prefix}message`} className={labelClass}>Message *</label>
        <textarea id={`${prefix}message`} name="message" placeholder="Tell us how we can help." value={form.message} onChange={handleChange} rows={5} className={`${fieldClass("message")} resize-y ${variant === "modal" ? "min-h-[160px]" : "min-h-[120px]"}`} />
        {errors.message && <p className="text-red-500 text-[12px] mt-1 m-0">{errors.message}</p>}
      </div>
      <button type="submit" disabled={sending} className="btn-gold w-full justify-center py-4 text-[16px] mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
