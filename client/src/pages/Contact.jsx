import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email.';
    if (!form.message.trim()) newErrors.message = 'Write a short message.';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setServerError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-bone px-6 md:px-12 py-16">
      <div className="max-w-xl mx-auto">
        <p className="text-rust text-xs tracking-widest uppercase mb-2">Contact</p>
        <h2 className="font-serif text-3xl text-ink mb-2">Get in touch</h2>
        <p className="text-ink/60 text-sm italic mb-8">
          General questions, press, or collaborations — not a specific booking or commission.
        </p>

        <form onSubmit={handleSubmit} className="bg-white border border-border-c p-8" noValidate>
          <div className="mb-5">
            <label htmlFor="name" className="block text-xs uppercase tracking-wide text-ink/50 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className={`w-full border px-3 py-2 text-sm ${errors.name ? 'border-rust' : 'border-border-c'}`}
            />
            {errors.name && <p className="text-rust text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-xs uppercase tracking-wide text-ink/50 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full border px-3 py-2 text-sm ${errors.email ? 'border-rust' : 'border-border-c'}`}
            />
            {errors.email && <p className="text-rust text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-xs uppercase tracking-wide text-ink/50 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className={`w-full border px-3 py-2 text-sm ${errors.message ? 'border-rust' : 'border-border-c'}`}
            />
            {errors.message && <p className="text-rust text-xs mt-1">{errors.message}</p>}
          </div>

          {serverError && (
            <p className="text-rust text-sm mb-4">{serverError}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-brass text-ink text-xs tracking-wide px-6 py-3 hover:bg-brass-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Sending...' : 'Send message'}
          </button>

          {submitted && (
            <div className="mt-5 border-l-4 border-sage bg-sage/10 p-4">
              <p className="text-sm text-ink">Thanks — your message has been sent. We'll get back to you soon.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;