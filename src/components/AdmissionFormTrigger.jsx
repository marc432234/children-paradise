"use client";

export default function AdmissionFormTrigger({ children, className = "", onOpen }) {
  return <button type="button" onClick={() => { onOpen?.(); window.dispatchEvent(new Event("open-admission-form")); }} className={className}>{children}</button>;
}
