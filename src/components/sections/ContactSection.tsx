"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
  FaUserAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import TabContainer from "@/components/ui/TabContainer";

const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Form submission state
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    hasError: false,
    errorMessage: "",
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        hasError: true,
        errorMessage: "Please fill in all required fields.",
      });
      return;
    }

    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        hasError: true,
        errorMessage: "Please enter a valid email address.",
      });
      return;
    }

    // Set submitting state
    setFormState({
      isSubmitting: true,
      isSubmitted: false,
      hasError: false,
      errorMessage: "",
    });

    try {
      // Get the form element and send it via Formspree
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Send to Formspree
      const response = await fetch("https://formspree.io/f/mrbqejaa", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Success state
        setFormState({
          isSubmitting: false,
          isSubmitted: true,
          hasError: false,
          errorMessage: "",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormState((prev) => ({
            ...prev,
            isSubmitted: false,
          }));
        }, 5000);
      } else {
        // Handle server error
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      // Error state
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        hasError: true,
        errorMessage:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  };
  // Create the tabs for the contact section
  const contactTabs = [
    {
      id: "form",
      label: "Message Form",
      content: (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Send a message
          </h3>

          {formState.isSubmitted ? (
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-800 flex flex-col items-center justify-center text-center">
              <FaCheckCircle className="text-green-500 dark:text-green-400 text-4xl mb-4" />
              <h4 className="text-xl font-medium text-green-800 dark:text-green-300 mb-2">
                Message sent!
              </h4>
              <p className="text-green-700 dark:text-green-400">
                Thank you for your message. I will contact you as soon as
                possible.
              </p>
            </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              action="https://formspree.io/f/mrbqejaa" // You already have this ID in your fetch request
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 ${
                      formState.hasError && !formData.name
                        ? "border-red-500 dark:border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 ${
                      formState.hasError && !formData.email
                        ? "border-red-500 dark:border-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 ${
                    formState.hasError && !formData.message
                      ? "border-red-500 dark:border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  required
                ></textarea>
              </div>

              {/* Error message */}
              {formState.hasError && (
                <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded-md border border-red-200 dark:border-red-800">
                  <div className="flex items-center">
                    <FaExclamationCircle className="text-red-500 mr-2 flex-shrink-0" />
                    <p className="text-sm text-red-700 dark:text-red-400">
                      {formState.errorMessage}
                    </p>
                  </div>
                </div>
              )}

              <div>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-full md:w-auto relative"
                  disabled={formState.isSubmitting}
                >
                  {formState.isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin mr-2 inline" />
                      Sending...
                    </>
                  ) : (
                    "Send"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      ),
    },
    {
      id: "info",
      label: "Contact Info",
      content: (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Contact Information
          </h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
              <a
                href="mailto:jesusobulan@hotmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                jesusobulan@hotmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
              <a
                href="tel:+32483416601"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                +32 483 41 66 01
              </a>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
              <span className="text-gray-700 dark:text-gray-300">
                Antwerp, Belgium
              </span>
            </div>
            <div className="flex items-center">
              <FaCalendarAlt className="text-blue-600 dark:text-blue-400 mr-3 text-xl" />
              <span className="text-gray-700 dark:text-gray-300">
                Available for work from July 2025
              </span>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Social Media
            </h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaGithub className="text-gray-800 dark:text-gray-200 mr-3 text-xl" />
                <a
                  href="https://github.com/Prometheus1993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="text-blue-700 dark:text-blue-500 mr-3 text-xl" />
                <a
                  href="https://www.linkedin.com/in/jesus-o-bulan-9964802a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "availability",
      label: "Availability",
      content: (
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Availability
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I am currently available for:
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
              <div className="mr-4 mt-1 text-blue-600 dark:text-blue-400">
                <FaUserAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Freelance projects
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  For short to medium-term web development projects
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
              <div className="mr-4 mt-1 text-blue-600 dark:text-blue-400">
                <FaUserAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Full-time positions
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Looking for full-time roles in web/software development
                </p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
              <div className="mr-4 mt-1 text-blue-600 dark:text-blue-400">
                <FaUserAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Collaborations
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Open to collaborating on interesting projects and initiatives
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="/cv-jesus-obulan.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="secondary"
                className="flex items-center w-full justify-center"
              >
                <FaDownload className="mr-2" /> Download CV
              </Button>
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Contact
        </h2>

        <TabContainer
          tabs={contactTabs}
          defaultTabId="form"
          transitionDirection="fade"
          transitionDuration={0.3}
          className="max-w-4xl mx-auto"
          contentClassName="mt-1"
        />
      </div>
    </section>
  );
};

export default ContactSection;
