"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";


export default function ContactForm({ isEnglish = false }) {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "",
    phone_id: "",
    email_id: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_p0emtmc",
        "template_8crmxkl",
        formData,
        "2xRfzLPMz2jVK17og"
      )
      .then(() => {
        setSuccess(true);
        setFormData({
          from_name: "",
          to_name: "",
          phone_id: "",
          email_id: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Error enviando la consulta:", err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="w-full py-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-3">
            {isEnglish ? "Contact" : "Contacto"}
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">
            {isEnglish
              ? "Tell us about your project"
              : "Cuéntanos sobre tu proyecto"}
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-xl">
            {isEnglish
              ? "We build digital solutions tailored to your business needs."
              : "Desarrollamos soluciones digitales adaptadas a las necesidades de tu negocio."}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/80 dark:bg-white/5 backdrop-blur
                     border border-neutral-200/60 dark:border-white/10
                     rounded-3xl p-8 md:p-10 shadow-lg"
        >
          {/* Nombre y apellido */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label={isEnglish ? "Name" : "Nombre"}
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder={isEnglish ? "Your name" : "Tu nombre"}
            />
            <Input
              label={isEnglish ? "Last name" : "Apellido"}
              name="to_name"
              value={formData.to_name}
              onChange={handleChange}
              placeholder={isEnglish ? "Last name" : "Apellido"}
            />
          </div>

          {/* Teléfono y email */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label={isEnglish ? "Phone" : "Teléfono"}
              name="phone_id"
              value={formData.phone_id}
              onChange={handleChange}
              placeholder="+598 00 000 000"
            />
            <Input
              label="Email"
              name="email_id"
              type="email"
              value={formData.email_id}
              onChange={handleChange}
              placeholder="email@empresa.com"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
              {isEnglish
                ? "How can we help you?"
                : "¿Cómo podemos ayudarte?"}
            </label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={
                isEnglish
                  ? "Tell us about your idea, system or problem to solve..."
                  : "Cuéntanos tu idea, sistema o problema a resolver..."
              }
              className="w-full rounded-xl border border-neutral-300 dark:border-white/10
                         bg-transparent px-4 py-3 text-neutral-900 dark:text-white
                         placeholder:text-neutral-400 focus:outline-none
                         focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-500 px-6 py-3
                       text-white font-semibold tracking-wide
                       transition-all hover:bg-emerald-600
                       disabled:opacity-50"
          >
            {loading
              ? isEnglish
                ? "Sending..."
                : "Enviando..."
              : isEnglish
              ? "Send message"
              : "Enviar consulta"}
          </button>

          {/* Success */}
          {success && (
            <p className="text-center text-sm text-emerald-600 mt-4">
              {isEnglish
                ? "Your message was sent successfully."
                : "Tu mensaje fue enviado correctamente."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/* ---------- Reusable Input ---------- */

function Input({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-neutral-300 dark:border-white/10
                   bg-transparent px-4 py-3 text-neutral-900 dark:text-white
                   placeholder:text-neutral-400 focus:outline-none
                   focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  );
}
