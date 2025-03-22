
import React from 'react';
import { TransitionWrapper } from '@/components/shared/TransitionWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  BuildingIcon, 
  LockIcon, 
  BellIcon, 
  PaintbrushIcon,
  UserIcon,
  SaveIcon
} from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <TransitionWrapper>
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-semibold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage system preferences</p>
        </div>
      </TransitionWrapper>

      <TransitionWrapper delay={100}>
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-md mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BuildingIcon size={20} />
                  Hotel Information
                </CardTitle>
                <CardDescription>
                  Update your hotel's basic information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FormLabel>Hotel Name</FormLabel>
                    <Input defaultValue="Luxury Resort & Spa" />
                  </div>
                  <div className="space-y-2">
                    <FormLabel>Contact Email</FormLabel>
                    <Input defaultValue="contact@luxuryresort.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <FormLabel>Phone Number</FormLabel>
                    <Input defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <FormLabel>City</FormLabel>
                    <Input defaultValue="San Francisco" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <FormLabel>Address</FormLabel>
                    <Input defaultValue="123 Beach Avenue, California, USA" />
                  </div>
                </div>
                
                <div className="space-y-2 border-t pt-4 mt-4">
                  <FormLabel>Check-in/Check-out Times</FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <FormLabel className="text-sm text-muted-foreground">Check-in Time</FormLabel>
                      <Select defaultValue="14">
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12">12:00 PM</SelectItem>
                          <SelectItem value="13">1:00 PM</SelectItem>
                          <SelectItem value="14">2:00 PM</SelectItem>
                          <SelectItem value="15">3:00 PM</SelectItem>
                          <SelectItem value="16">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <FormLabel className="text-sm text-muted-foreground">Check-out Time</FormLabel>
                      <Select defaultValue="11">
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10:00 AM</SelectItem>
                          <SelectItem value="11">11:00 AM</SelectItem>
                          <SelectItem value="12">12:00 PM</SelectItem>
                          <SelectItem value="13">1:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="flex items-center gap-2">
                  <SaveIcon size={16} />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="account">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserIcon size={20} />
                  Account Settings
                </CardTitle>
                <CardDescription>
                  Manage your account details and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FormLabel>Name</FormLabel>
                    <Input defaultValue="Admin User" />
                  </div>
                  <div className="space-y-2">
                    <FormLabel>Email</FormLabel>
                    <Input defaultValue="admin@hotel.com" type="email" />
                  </div>
                </div>
                
                <div className="space-y-2 border-t pt-4 mt-4">
                  <FormLabel>Password</FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <FormLabel className="text-sm text-muted-foreground">Current Password</FormLabel>
                      <Input type="password" />
                    </div>
                    <div className="space-y-2">
                      <FormLabel className="text-sm text-muted-foreground">New Password</FormLabel>
                      <Input type="password" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="flex items-center gap-2">
                  <SaveIcon size={16} />
                  Update Account
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BellIcon size={20} />
                  Notification Preferences
                </CardTitle>
                <CardDescription>
                  Control what notifications you receive.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FormLabel>New Reservations</FormLabel>
                        <FormDescription>Receive emails when new bookings are made</FormDescription>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FormLabel>Check-in Reminders</FormLabel>
                        <FormDescription>Receive reminders about upcoming check-ins</FormDescription>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FormLabel>Check-out Reminders</FormLabel>
                        <FormDescription>Receive reminders about upcoming check-outs</FormDescription>
                      </div>
                      <Switch defaultChecked={false} />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-sm font-medium">System Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FormLabel>Maintenance Alerts</FormLabel>
                        <FormDescription>Receive alerts about maintenance issues</FormDescription>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FormLabel>Low Inventory Alerts</FormLabel>
                        <FormDescription>Receive alerts when inventory runs low</FormDescription>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="flex items-center gap-2">
                  <SaveIcon size={16} />
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PaintbrushIcon size={20} />
                  Appearance Settings
                </CardTitle>
                <CardDescription>
                  Customize how the system looks.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Theme Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4 cursor-pointer ring-2 ring-primary">
                      <div className="h-20 bg-white rounded-md mb-2"></div>
                      <p className="text-sm font-medium text-center">Light Mode</p>
                    </div>
                    <div className="border rounded-lg p-4 cursor-pointer">
                      <div className="h-20 bg-gray-900 rounded-md mb-2"></div>
                      <p className="text-sm font-medium text-center">Dark Mode</p>
                    </div>
                    <div className="border rounded-lg p-4 cursor-pointer">
                      <div className="h-20 bg-gradient-to-r from-white to-gray-900 rounded-md mb-2"></div>
                      <p className="text-sm font-medium text-center">System Default</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-sm font-medium">Display Options</h3>
                  <div className="space-y-2">
                    <div className="space-y-2">
                      <FormLabel>Font Size</FormLabel>
                      <Select defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue placeholder="Select font size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FormLabel>Animations</FormLabel>
                        <FormDescription>Enable interface animations</FormDescription>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <FormLabel>Compact View</FormLabel>
                        <FormDescription>Use compact layout to show more content</FormDescription>
                      </div>
                      <Switch defaultChecked={false} />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="flex items-center gap-2">
                  <SaveIcon size={16} />
                  Save Settings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </TransitionWrapper>
    </div>
  );
};

export default Settings;
