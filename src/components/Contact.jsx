import { useState, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        'service_mkhdazt',
        'template_fbt6iau',
        form.current,
        'zxy1ZFpkoSYUvUs6C'
      );

      console.log('Résultat EmailJS:', result);

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Message envoyé avec succès!'
        });
        setFormData({ from_name: '', email: '', message: '' });
      } else {
        throw new Error('Échec de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/danyvassily' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/dany-vassiliakos-7438a3339/' },
    { name: 'Email', icon: <SiGmail />, url: 'mailto: danyvassiliakos@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 b">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Contact</h2>
        <div className="max-w-3xl mx-auto">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                Nom
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg border text-gray-900 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50"
            >
              {loading ? 'Envoi en cours...' : 'Envoyer le message'}
            </button>

            {status.message && (
              <div className={`mt-4 p-4 rounded-lg ${
                status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {status.message}
              </div>
            )}
          </form>

          <div className="mt-12">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 