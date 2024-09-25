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
import { playfairDisplay } from "@/app/fonts/fonts";

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Input your proper full name.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  // Initialize the form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
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
    <div className="p-4 sm:p-6 lg:p-8 md:flex md:flex-col md:items-center md:justify-center bg-white/70">
      <h1
        className={`${playfairDisplay.className} text-4xl text-center md:text-5xl font-bold mb-4 leading-tight`}
      >
        Contact Us
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="md:space-y-6 md:w-1/3"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="my-5">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    className="shadow-md focus-visible:ring-primary-light"
                    placeholder="Enter your full name."
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
              <FormItem className="my-5">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="shadow-md  focus-visible:ring-primary-light"
                    placeholder="Enter your email"
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
              <FormItem className="my-5">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <PhoneInput
                    defaultCountry="ID"
                    placeholder="Enter a phone number"
                    international
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="my-8 w-full sm:w-auto"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
