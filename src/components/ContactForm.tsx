"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PhoneInput } from "@/components/ui/phone-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { playfairDisplay, montserrat } from "@/app/fonts/fonts";

// Form schema with validation
const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Input your proper first name.",
  }),
  lastname: z.string().min(2, {
    message: "Input your proper last name.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  // Initialize the form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
  });

  // Handle form submission
  async function onSubmit(data: FormValues) {
    toast({
      title: "Thank you for contacting us!",
      description: `We will contact you back.`,
      className: "bg-green-200",
      duration: 3000,
    });
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 md:flex md:flex-col md:items-center justify-center bg-[#7A9E7E]">
      <h1
        className={`${playfairDisplay.className} text-4xl text-center md:text-5xl font-bold mb-8 leading-tight`}
      >
        Contact Us
      </h1>
      <h3
        className={`${montserrat.className} text-xl md:text-2xl text-center font-normal mb-8`}
      >
        Have a question, inquire about pricing, or want to share feedback? We
        are here to help.
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:space-y-6 w-11/12 md:w-7/12 mx-auto"
        >
          {/* Use grid to align the fields in two columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-base">
                    First Name *
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="shadow-md focus-visible:ring-primary-light"
                      placeholder="First Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-base">
                    Last Name *
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="shadow-md focus-visible:ring-primary-light"
                      placeholder="Last Name"
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
                  <FormLabel className="font-bold text-base">Email *</FormLabel>
                  <FormControl>
                    <Input
                      className="shadow-md focus-visible:ring-primary-light"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-base">
                    Phone Number *
                  </FormLabel>
                  <FormControl>
                    <PhoneInput
                      className="shadow-md focus-visible:ring-primary-light"
                      defaultCountry="ID"
                      placeholder="Phone Number"
                      international
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mt-8">
                <FormLabel className="font-bold text-base">Message</FormLabel>
                <FormControl>
                  <textarea
                    className="shadow-md focus-visible:ring-primary-light w-full p-4 border border-gray-300 rounded-md"
                    rows={5}
                    placeholder="Additional notes or messages (Optional)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Button
              type="submit"
              className="my-8 w-full p-6 sm:w-auto"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span className="text-base">Please Wait...</span>
                </>
              ) : (
                <span className="text-base">Submit</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
