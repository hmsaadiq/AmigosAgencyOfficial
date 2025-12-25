import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { supabase } from '../lib/supabase';
import { sendContactNotification } from '../lib/email';

export function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    package: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.package) {
      toast.error('Please select a package');
      return;
    }

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            package: formData.package,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      // Send email notification
      await sendContactNotification(formData);

      toast.success('Thank you! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', country: '', package: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-[#F9F3EF] dark:bg-[#0F1F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg:text-5xl text-[#1B3C53] dark:text-[#F9F3EF] mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-[#456882] dark:text-[#D2C1B6] mb-8">
              Let{'\''}s make your study abroad dreams a reality. Fill out the form and our team will contact you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D2C1B6]/40 dark:bg-[#456882]/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#1B3C53] dark:text-[#F9F3EF]" />
                </div>
                <div>
                  <div className="text-[#1B3C53] dark:text-[#F9F3EF] mb-1">Email Us</div>
                  <div className="text-[#456882] dark:text-[#D2C1B6]">amigosaandgeneralservice@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D2C1B6]/40 dark:bg-[#456882]/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#1B3C53] dark:text-[#F9F3EF]" />
                </div>
                <div>
                  <div className="text-[#1B3C53] dark:text-[#F9F3EF] mb-1">Call Us</div>
                  <div className="text-[#456882] dark:text-[#D2C1B6]">+234 8102554294</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D2C1B6]/40 dark:bg-[#456882]/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#1B3C53] dark:text-[#F9F3EF]" />
                </div>
                <div>
                  <div className="text-[#1B3C53] dark:text-[#F9F3EF] mb-1">Call Us</div>
                  <div className="text-[#456882] dark:text-[#D2C1B6]">+90 5527877116</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D2C1B6]/40 dark:bg-[#456882]/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#1B3C53] dark:text-[#F9F3EF]" />
                </div>
                <div>
                  <div className="text-[#1B3C53] dark:text-[#F9F3EF] mb-1">Visit Us</div>
                  <div className="text-[#456882] dark:text-[#D2C1B6]">Abuja, Nigeria</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1B3C53] rounded-2xl shadow-xl p-8 border border-[#D2C1B6]/30 dark:border-[#456882]/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#1B3C53] dark:text-[#F9F3EF] mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Bala Blu"
                  className="border-[#D2C1B6]/50 dark:border-[#456882]/50 dark:bg-[#0F1F2E] dark:text-[#F9F3EF]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-[#1B3C53] dark:text-[#F9F3EF] mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="balablu@naijaway.com"
                  className="border-[#D2C1B6]/50 dark:border-[#456882]/50 dark:bg-[#0F1F2E] dark:text-[#F9F3EF]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-[#1B3C53] dark:text-[#F9F3EF] mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+234 XXX XXX XXXX"
                  className="border-[#D2C1B6]/50 dark:border-[#456882]/50 dark:bg-[#0F1F2E] dark:text-[#F9F3EF]"
                />
              </div>

              <div>
                <label htmlFor="package" className="block text-sm text-[#1B3C53] dark:text-[#F9F3EF] mb-2">
                  Select Package *
                </label>
                <Select value={formData.package} onValueChange={(value) => setFormData({ ...formData, package: value })} required>
                  <SelectTrigger className="border-[#D2C1B6]/50 dark:border-[#456882]/50 dark:bg-[#0F1F2E] dark:text-[#F9F3EF]">
                    <SelectValue placeholder="Choose a package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Admission</SelectItem>
                    <SelectItem value="standard">Standard Package</SelectItem>
                    <SelectItem value="full">Full Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm text-[#1B3C53] dark:text-[#F9F3EF] mb-2">
                  Preferred Study Destination
                </label>
                <Input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g., Canada, UK, Turkey"
                  className="border-[#D2C1B6]/50 dark:border-[#456882]/50 dark:bg-[#0F1F2E] dark:text-[#F9F3EF]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-[#1B3C53] dark:text-[#F9F3EF] mb-2">
                  Tell us about your goals
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="What program are you interested in? When do you plan to start?"
                  className="border-[#D2C1B6]/50 dark:border-[#456882]/50 dark:bg-[#0F1F2E] dark:text-[#F9F3EF]"
                />
              </div>

              <Button type="submit" className="w-full bg-[#1B3C53] hover:bg-[#456882] dark:bg-[#D2C1B6] dark:text-[#1B3C53] dark:hover:bg-[#F9F3EF]">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}