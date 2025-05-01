'use server';

import { z } from 'zod';

// Define validation schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData);
    
    // Here you would typically send an email or store in database
    // For now, we'll just simulate a successful submission
    
    // You could use a service like SendGrid, Nodemailer, or a form service
    // Example with SendGrid would be:
    // await sendGrid.send({
    //   to: 'your-email@example.com',
    //   from: 'your-website@example.com',
    //   subject: `Contact Form: ${validatedData.subject || 'No Subject'}`,
    //   text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\nMessage: ${validatedData.message}`,
    // });
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success
    return { success: true };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { 
      success: false, 
      error: error instanceof z.ZodError 
        ? error.errors.map(e => `${e.path}: ${e.message}`).join(', ')
        : 'Failed to submit form. Please try again.' 
    };
  }
}