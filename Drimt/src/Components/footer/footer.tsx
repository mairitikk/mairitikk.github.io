import footer_logo from '../../assets/logo2.png';
import user_icon from '../../assets/user_icon.svg';
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from 'react-hook-form'; // Import useForm
import { zodResolver } from '@hookform/resolvers/zod'; // For Zod validation
import * as z from 'zod'; // For Zod schema

// --- Define your Zod schema for the email input ---
// This schema describes the shape and validation rules for your form data
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
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Email submitted:", values.email);
    // Here you would typically send the email to your backend or an email service
    // e.g., using an API call (axios, fetch)
    // After submission, you might want to reset the form:
    // form.reset();
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
                  <FormItem className="flex-grow"> {/* flex-grow ensures FormItem takes available space */}
                    {/* Hiding the label for a compact footer look. If you need it, uncomment and style appropriately. */}
                    {/* <FormLabel className="sr-only">Your Email</FormLabel> */}
                    <FormControl>
                      <div className="relative flex items-center w-full"> {/* Wrapper for icon and input */}
                         {/* This assumes user_icon is a static part of the input design,
                             if you want it IN the input, you might need to adjust shadcn's Input or use a custom one.
                             For now, let's put it next to the input if desired,
                             or remove it if the new input style doesn't accommodate it naturally. */}
                         <img src={user_icon} alt="user icon" className="absolute left-3 h-5 w-5 text-gray-400 z-10" />
                         <Input
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500 py-6 text-base rounded-md focus:ring-2 focus:ring-[#3A3AF8] focus:border-transparent w-full"
                          {...field}
                         />
                      </div>
                    </FormControl>
                    {/* You can add FormMessage here if you want validation errors to show below */}
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
              {/* Subscribe Button */}
              <button
                type="submit" // Important: set type="submit" for the button
                className="bg-[#3A3AF8] hover:bg-[#2A2AD7] text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </Form> {/* Closing Form provider */}
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-700 my-8" />

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        {/* Footer Bottom Left - Copyright */}
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Mairi Tikk. All rights reserved.
        </p>

        {/* Footer Bottom Right - Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
          <p className="hover:text-white cursor-pointer transition-colors duration-200">Term of Services</p>
          <p className="hover:text-white cursor-pointer transition-colors duration-200">Privacy Policy</p>
          <p className="hover:text-white cursor-pointer transition-colors duration-200">Connect with me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;