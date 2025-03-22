
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LogInIcon, UserIcon, ShieldIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

// Form schemas
const userLoginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

const adminLoginSchema = z.object({
  username: z.string().min(3, { message: 'Username must be at least 3 characters' }),
  password: z.string().min(8, { message: 'Admin password must be at least 8 characters' }),
  securityCode: z.string().min(6, { message: 'Security code must be at least 6 characters' }),
});

type UserLoginValues = z.infer<typeof userLoginSchema>;
type AdminLoginValues = z.infer<typeof adminLoginSchema>;

const Login = () => {
  const [activeTab, setActiveTab] = useState<'user' | 'admin'>('user');
  const { toast } = useToast();
  const navigate = useNavigate();

  // User login form
  const userForm = useForm<UserLoginValues>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Admin login form
  const adminForm = useForm<AdminLoginValues>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      username: '',
      password: '',
      securityCode: '',
    },
  });

  const onUserSubmit = (data: UserLoginValues) => {
    console.log('User login attempt:', data);
    // TODO: Implement actual authentication

    // Simulate successful login
    toast({
      title: "Login successful",
      description: "Welcome back to StayKeeper!",
    });
    
    navigate('/');
  };

  const onAdminSubmit = (data: AdminLoginValues) => {
    console.log('Admin login attempt:', data);
    // TODO: Implement actual authentication with security code verification
    
    // Simulate successful login
    toast({
      title: "Admin login successful",
      description: "Welcome back, administrator!",
      variant: "default",
    });
    
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-muted/20">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-display">StayKeeper Login</CardTitle>
          <CardDescription>
            Sign in to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="user" onValueChange={(value) => setActiveTab(value as 'user' | 'admin')}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="user" className="flex items-center gap-2">
                <UserIcon size={16} />
                <span>User</span>
              </TabsTrigger>
              <TabsTrigger value="admin" className="flex items-center gap-2">
                <ShieldIcon size={16} />
                <span>Admin</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="user">
              <Form {...userForm}>
                <form onSubmit={userForm.handleSubmit(onUserSubmit)} className="space-y-4">
                  <FormField
                    control={userForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={userForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full mt-2" disabled={userForm.formState.isSubmitting}>
                    {userForm.formState.isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">⏳</span> Signing in...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <LogInIcon size={16} />
                        Sign In
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="admin">
              <Form {...adminForm}>
                <form onSubmit={adminForm.handleSubmit(onAdminSubmit)} className="space-y-4">
                  <FormField
                    control={adminForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Admin Username</FormLabel>
                        <FormControl>
                          <Input placeholder="admin" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={adminForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Admin Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={adminForm.control}
                    name="securityCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Security Code</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Security code" {...field} />
                        </FormControl>
                        <FormDescription>
                          Special code provided to administrators only
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full mt-2" disabled={adminForm.formState.isSubmitting}>
                    {adminForm.formState.isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">⏳</span> Verifying...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <ShieldIcon size={16} />
                        Admin Login
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-muted-foreground">
            {activeTab === 'user' ? (
              <p>Don't have an account? Contact your administrator.</p>
            ) : (
              <p>Admin access is restricted. Contact IT support if needed.</p>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
