import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Building, Truck, Phone } from "lucide-react";

const CONTACT_EMAIL = "oasisdistributionmiami@gmail.com";
const CONTACT_PHONE = "(786) 277-5660";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  businessName: z.string().min(2, { message: "Business Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Valid phone number required" }),
  businessType: z.string().min(1, { message: "Please select your business type" }),
  interest: z.string().min(1, { message: "Please select a product interest" }),
  message: z.string().optional(),
});

export function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      businessType: "",
      interest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(
      `Wholesale Inquiry — ${values.businessName} (${values.interest})`
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nBusiness: ${values.businessName}\nEmail: ${values.email}\nPhone: ${values.phone}\nBusiness Type: ${values.businessType}\nProduct Interest: ${values.interest}\n\nMessage:\n${values.message || "—"}`
    );
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, "_blank");
    toast({
      title: "Opening email client…",
      description: "Your inquiry details are pre-filled. Just hit Send.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12">

          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
                Get In Touch
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Sales</h2>
              <p className="text-muted-foreground text-lg">
                Ready to set up your wholesale account? Get in touch with our distribution team.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Building size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Oasis Distribution, LLC</h4>
                  <p className="text-muted-foreground text-sm">Florida-Based Latin Food Distribution</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground text-sm">Homestead, Florida</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone / WhatsApp</h4>
                  <a
                    href={`tel:+17862775660`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Truck size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Serving</h4>
                  <p className="text-muted-foreground text-sm">Food service and wholesale clients across Florida</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-card rounded-2xl p-8 border border-border shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Restaurant" {...field} data-testid="input-business" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(555) 123-4567" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-business-type">
                            <SelectValue placeholder="Select your business type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="cafe">Café / Coffee Shop</SelectItem>
                          <SelectItem value="bakery">Bakery</SelectItem>
                          <SelectItem value="supermarket">Supermarket / Grocery</SelectItem>
                          <SelectItem value="convenience">Convenience Store</SelectItem>
                          <SelectItem value="food-truck">Food Truck</SelectItem>
                          <SelectItem value="distributor">Distributor</SelectItem>
                          <SelectItem value="catering">Catering Company</SelectItem>
                          <SelectItem value="other">Other Food Service</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-interest">
                            <SelectValue placeholder="Select product category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="pastelitos">Pastelitos (K&D)</SelectItem>
                          <SelectItem value="cachitos">Cachitos</SelectItem>
                          <SelectItem value="tequenos">Tequeños</SelectItem>
                          <SelectItem value="emp-venezolana">Empanadas Venezolanas</SelectItem>
                          <SelectItem value="emp-argentina">Empanadas Argentinas</SelectItem>
                          <SelectItem value="emp-colombiana">Empanada Colombiana (PANNA)</SelectItem>
                          <SelectItem value="pan-de-jamon">Pan de Jamón (K&D)</SelectItem>
                          <SelectItem value="pandebono">Pandebono (PANNA)</SelectItem>
                          <SelectItem value="multiple">Multiple Products</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your volume needs, delivery frequency, or any specific questions..."
                          className="resize-none min-h-[110px]"
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" size="lg" data-testid="button-submit-contact">
                  Request Wholesale Pricing
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
