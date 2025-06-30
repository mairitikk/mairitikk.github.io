
import theme_pattern from '../../assets/theme_pattern4.png'
import { Mail, Phone, MapPin } from "lucide-react";

// ShadCN UI Imports
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; 
import { Button } from "@/components/ui/button";

// React Hook Form and Zod Imports
import { useForm } from "react-hook-form"; // Import useForm
import { z } from "zod"; // Import z from zod
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// Infer the TypeScript type directly from your Zod schema
type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {

    // Initialize react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema), 
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Define the onSubmit function
const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
   <section  id="contact" className="flex flex-col items-center justify-center gap-10 lg:gap-20 mt-10 mb-10 mx-5 sm:mx-10 lg:mx-[170px]">
      <div className="relative flex flex-col items-center mb-10 mt-20">
        <h1 className='px-4 text-4xl sm:text-6xl lg:text-8xl font-semibold text-center'>Get in touch</h1>
        <img
          src={theme_pattern}
          alt="Decorative pattern"
          className='absolute bottom-[-5px] right-0 z-[-1] w-full h-16 sm:h-20 lg:h-28 object-cover'
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
        {/* Left Section: Let's Talk */}
        <div className="space-y-8">
          <h3 className="text-5xl font-bold text-[#3A3AF8]">Let's talk</h3>
          <p className="text-gray-500 text-lg">
         I'm currently excited to be available for new and challenging projects,
  whether they lean towards frontend development, robust backend solutions,
  or full-stack innovation. If you have a specific idea in mind or need
  assistance in shaping your technical vision, please don't hesitate to
  send me a message. I'm keen to collaborate and explore how I can bring
  value to your next endeavor. You can reach out anytime, and I look forward
  to hearing from you.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-gray-500" />
              <p className="text-gray-500 text-lg">mairi.tikk@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-gray-500" />
              <p className="text-gray-500 text-lg">+372 58282327</p>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-gray-500" />
              <p className="text-gray-500 text-lg">Germany</p>
            </div>
          </div>
        </div>



   {/* Right Section: Contact Form */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 text-lg">Your Name</FormLabel> {/* Changed to gray-500 for consistency */}
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        className="bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 py-6 text-base rounded-md focus:ring-2 focus:ring-[#3A3AF8] focus:border-transparent" // Adjusted styles for lighter theme
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 text-lg">Your Email</FormLabel> {/* Changed to gray-500 for consistency */}
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 py-6 text-base rounded-md focus:ring-2 focus:ring-[#3A3AF8] focus:border-transparent" // Adjusted styles for lighter theme
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500 text-lg">Write your message here</FormLabel> {/* Changed to gray-500 for consistency */}
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message"
                        className="bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 min-h-[150px] text-base resize-y rounded-md focus:ring-2 focus:ring-[#3A3AF8] focus:border-transparent" // Adjusted styles for lighter theme
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="bg-[#3A3AF8] hover:bg-[#2A2AD7] text-white text-lg px-8 py-3 rounded-md mt-6 transition-colors duration-300 w-full md:w-auto"
              >
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    
      </section>
      )
}

export default Contact
