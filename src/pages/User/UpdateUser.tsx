import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { useUserInfoQuery, useUpdateUserMutation } from "@/redux/features/auth/auth.api";
import type { IErrorResponse } from "@/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { User, Phone, MapPin, Save, Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const updateUserSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[+]?[0-9\s-()]+$/, "Invalid phone number format"),
  address: z
    .string()
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address must be less than 200 characters"),
});

type UpdateUserFormData = z.infer<typeof updateUserSchema>;

export default function UpdateUser() {
  const { data: userInfo, isLoading: isLoadingUser } = useUserInfoQuery(undefined);
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  const form = useForm<UpdateUserFormData>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      phoneNumber: "",
      address: "",
    },
  });

  // Populate form with current user data when it loads
  useEffect(() => {
    if (userInfo?.data) {
      form.reset({
        phoneNumber: userInfo.data.phoneNumber || "",
        address: userInfo.data.address || "",
      });
    }
  }, [userInfo, form]);

  const onSubmit = async (data: UpdateUserFormData) => {
    const toastId = toast.loading("Updating profile...");

    try {
      const result = await updateUser({
        id: userInfo?.data?._id,
        phone: data.phoneNumber,
        address: data.address,
      }).unwrap();

      if (result.success) {
        toast.success("Profile updated successfully!", { id: toastId });
      } else {
        toast.error("Failed to update profile", { id: toastId });
      }
    } catch (error) {
      console.error("Update error:", error);
      const errorMessage = (error as IErrorResponse)?.message || "Something went wrong";
      toast.error(errorMessage, { id: toastId });
    }
  };

  if (isLoadingUser) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Loading profile...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <User className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Update Contact Information</CardTitle>
          <CardDescription>
            Update your phone number and address. Name and email are fixed and cannot be changed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Display current user info */}
          <div className="mb-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center space-x-2 text-sm font-medium text-muted-foreground mb-2">
                  <User className="h-4 w-4" />
                  <span>Full Name</span>
                </label>
                <div className="px-3 py-2 bg-muted rounded-md text-sm">
                  {userInfo?.data?.name || "Not provided"}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <div className="px-3 py-2 bg-muted rounded-md text-sm">
                  {userInfo?.data?.email || "Not provided"}
                </div>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Phone Number Field */}
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Phone Number</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        {...field}
                        disabled={isUpdating}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address Field */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>Address</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your full address"
                        className="min-h-[100px]"
                        {...field}
                        disabled={isUpdating}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  disabled={isUpdating}
                  className="min-w-[120px]"
                >
                  {isUpdating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Update Contact Info
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
