import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Require either email or phone
    if (!formData.email && !formData.phone) {
      newErrors.email = 'Either email or phone is required';
      newErrors.phone = 'Either email or phone is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const isFormValid = validateForm();
    setIsValid(isFormValid);
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) {
      setTouched({
        name: true,
        email: true,
        phone: true,
      });
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      let apiUrl = '/.netlify/functions/submit-contact';
      if (process.env.NODE_ENV === 'development') {
        apiUrl = 'http://localhost:3000/submit-contact';
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let errorMessage = 'Error saving data';
        try {
          const errorData = await response.json();
          if (errorData && errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (jsonError) {
          console.error('Error parsing error response:', jsonError);
        }
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorMessage}`);
      }

      const result = await response.json();
      console.log(result);

      // Download brochure...
      const brochureUrl = '/AADHVAN-Shine-Brochure.pdf';
      const link = document.createElement('a');
      link.href = brochureUrl;
      link.download = 'Aadhvan-Shine-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form
      setFormData({ name: '', email: '', phone: '' });
      setTouched({});
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmissionError(error.message || 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched({ ...touched, [field]: true });
  };

  return (
    <section id="contact-us" className="py-20 px-4 bg-neutral">      
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-secondary-black">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-primary" />
                  <span className="text-gray-700">+91 70168 04497</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-primary" />
                  <span className="text-gray-700">+91 84016 04039</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-primary" />
                  <span className="text-gray-700">
                    Nr Neminath Digambar Jain Temple,<br />
                    Behind Flora Ixora.<br />
                    South Bopal, Ahmedabad.
                  </span>
              </div>              
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-12 text-accent">Download Brochure</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name *"
                className={`w-full px-4 py-2 rounded-lg border-gray-300 ${
                  touched.name && errors.name ?
                  'border-red-500' : ''
                } focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200`}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onBlur={() => handleBlur('name')}
                required

              />
              {touched.name && errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <input

                type="email"
                placeholder="Email Address"
                className={`w-full px-4 py-2 rounded-lg border-gray-300 ${
                  touched.email && errors.email ?
                  'border-red-500' : ''
                } focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200`}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onBlur={() => handleBlur('email')}
              />
              {touched.email && errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"

                placeholder="Phone Number"
                className={`w-full px-4 py-2 rounded-lg border-gray-300 ${
                  touched.phone && errors.phone ?
                  'border-red-500' : ''
                } focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200`}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                onBlur={() => handleBlur('phone')}
              />
              {touched.phone && errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isValid}

              className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                  isValid ?
                'bg-accent text-secondary-white hover:bg-primary' :
                'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit
            </button>
            </form>
          </div>
        </div>
        {submissionError && (

          <p className="mt-4 text-sm text-red-600">{submissionError}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;