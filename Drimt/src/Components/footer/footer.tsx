import footer_logo from '../../assets/logo2.png';
import user_icon from '../../assets/user_icon.svg';
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormControl} from "@/components/ui/form";
import { useForm } from 'react-hook-form'; // Import useForm
import { zodResolver } from '@hookform/resolvers/zod'; // For Zod validation
import * as z from 'zod'; // For Zod schema

// --- Define your Zod schema for the email input ---
const formSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email address.",
  }),
});

const Footer = () => {
  // --- Initialize the form using useForm hook ---
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), // Link schema to form validation
    defaultValues: {
      email: "", // Set default value for the email field
    },
  });

  // --- Define your onSubmit function ---
  // This function will be called when the form is submitted
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Email submitted:", values.email);

    try {
      // 1. Send the email data to your backend API endpoint
      // This endpoint will handle the actual email sending
      const response = await fetch('/api/subscribe', { // <-- Define this API route in your Next.js project
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: values.email }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Subscription successful:", data.message);
        alert("Thank you for subscribing! You'll receive a confirmation email shortly.");
        form.reset(); // Clear the form after successful submission
      } else {
        const errorData = await response.json();
        console.error("Subscription failed:", errorData.message);
        alert(`Failed to subscribe: ${errorData.message || 'An unknown error occurred.'}`);
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      alert("There was an error processing your subscription. Please try again later.");
    }
  }

  return (
    // Main container for the entire footer
    <footer className=" py-10 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <img src={footer_logo} alt="footer logo" className="h-10 w-auto" />
          <p className="max-w-xs">I am an aspiring Full-Stack Developer</p>
        </div>

        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-sm gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <div className="relative flex items-center w-full">
                        <img src={user_icon} alt="user icon" className="absolute left-3 h-5 w-5 text-gray-400 z-10" />
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 py-6 text-base rounded-md focus:ring-2 focus:ring-[#3A3AF8] focus:border-transparent w-full"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    {/* Uncomment if you want to show validation errors below the input */}
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              {/* Subscribe Button */}
              <button
                type="submit"
                className="bg-[#3A3AF8] hover:bg-[#2A2AD7] text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300 whitespace-nowrap"
                disabled={form.formState.isSubmitting} // Disable button while submitting
              >
                {form.formState.isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </Form>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-700 my-8" />

      {/* Footer Bottom Section */}
      <div className="flex justify-center">
        {/* Footer Bottom Left - Copyright */}
        <p>
          &copy; {new Date().getFullYear()} Mairi Tikk. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;