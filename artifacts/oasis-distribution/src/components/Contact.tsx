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
import { useLang } from "@/contexts/LanguageContext";

const CONTACT_EMAIL = "oasisdistributionmiami@gmail.com";
const CONTACT_PHONE = "(786) 277-5660";

const formSchema = z.object({
  name: z.string().min(2),
  businessName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  businessType: z.string().min(1),
  interest: z.string().min(1),
  message: z.string().optional(),
});

export function Contact() {
  const { toast } = useToast();
  const { t } = useLang();
  const f = t.contact.form;
  const l = t.contact.labels;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", businessName: "", email: "", phone: "", businessType: "", interest: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`Wholesale Inquiry — ${values.businessName} (${values.interest})`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nBusiness: ${values.businessName}\nEmail: ${values.email}\nPhone: ${values.phone}\nBusiness Type: ${values.businessType}\nProduct Interest: ${values.interest}\n\nMessage:\n${values.message || "—"}`
    );
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, "_blank");
    toast({ title: t.contact.toast.title, description: t.contact.toast.description });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-5 gap-12">

          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
                {t.contact.badge}
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">{t.contact.heading}</h2>
              <p className="text-muted-foreground text-lg">{t.contact.paragraph}</p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Building, title: l.company, sub: l.companyDesc },
                { icon: MapPin, title: l.location, sub: l.locationVal },
                { icon: Phone, title: l.phone, sub: CONTACT_PHONE, href: "tel:+17862775660" },
                { icon: Mail, title: l.email, sub: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: Truck, title: l.serving, sub: l.servingVal },
              ].map(({ icon: Icon, title, sub, href }, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{title}</h4>
                    {href ? (
                      <a href={href} className="text-muted-foreground text-sm hover:text-primary transition-colors break-all">{sub}</a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{sub}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-card rounded-2xl p-8 border border-border shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{f.fullName}</FormLabel>
                      <FormControl><Input placeholder="John Doe" {...field} data-testid="input-name" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="businessName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{f.businessName}</FormLabel>
                      <FormControl><Input placeholder="Acme Restaurant" {...field} data-testid="input-business" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{f.workEmail}</FormLabel>
                      <FormControl><Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{f.phone}</FormLabel>
                      <FormControl><Input type="tel" placeholder="(555) 123-4567" {...field} data-testid="input-phone" /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="businessType" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{f.businessType}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-business-type">
                          <SelectValue placeholder={f.businessTypePlaceholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="restaurant">{f.businessTypes.restaurant}</SelectItem>
                        <SelectItem value="cafe">{f.businessTypes.cafe}</SelectItem>
                        <SelectItem value="bakery">{f.businessTypes.bakery}</SelectItem>
                        <SelectItem value="supermarket">{f.businessTypes.supermarket}</SelectItem>
                        <SelectItem value="convenience">{f.businessTypes.convenience}</SelectItem>
                        <SelectItem value="food-truck">{f.businessTypes.foodTruck}</SelectItem>
                        <SelectItem value="distributor">{f.businessTypes.distributor}</SelectItem>
                        <SelectItem value="catering">{f.businessTypes.catering}</SelectItem>
                        <SelectItem value="other">{f.businessTypes.other}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="interest" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{f.productInterest}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-interest">
                          <SelectValue placeholder={f.productInterestPlaceholder} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pastelitos">{f.interests.pastelitos}</SelectItem>
                        <SelectItem value="cachitos">{f.interests.cachitos}</SelectItem>
                        <SelectItem value="tequenos">{f.interests.tequenos}</SelectItem>
                        <SelectItem value="emp-venezolana">{f.interests.empVenezolana}</SelectItem>
                        <SelectItem value="emp-argentina">{f.interests.empArgentina}</SelectItem>
                        <SelectItem value="emp-colombiana">{f.interests.empColombiana}</SelectItem>
                        <SelectItem value="pan-de-jamon">{f.interests.panDeJamon}</SelectItem>
                        <SelectItem value="pandebono">{f.interests.pandebono}</SelectItem>
                        <SelectItem value="multiple">{f.interests.multiple}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{f.message}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={f.messagePlaceholder} className="resize-none min-h-[110px]" {...field} data-testid="textarea-message" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button type="submit" className="w-full" size="lg" data-testid="button-submit-contact">
                  {f.submit}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
