import { Lock, Users, Settings2, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SettingsTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-primary" />
            <CardTitle>Security Settings</CardTitle>
          </div>
          <CardDescription>Access control and permissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">Two-Factor Authentication</div>
              <div className="text-sm text-muted-foreground">Enhanced security</div>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">API Access Keys</div>
              <div className="text-sm text-muted-foreground">Manage API credentials</div>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <CardTitle>User Management</CardTitle>
          </div>
          <CardDescription>Control user access and roles</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">Team Members</div>
              <div className="text-sm text-muted-foreground">12 active users</div>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">Role Assignments</div>
              <div className="text-sm text-muted-foreground">Access levels</div>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Settings2 className="w-5 h-5 text-primary" />
            <CardTitle>System Settings</CardTitle>
          </div>
          <CardDescription>General configuration options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">Notifications</div>
              <div className="text-sm text-muted-foreground">Alert preferences</div>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">System Language</div>
              <div className="text-sm text-muted-foreground">English (US)</div>
            </div>
            <Button variant="outline" size="sm">Change</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <CardTitle>Alert Configuration</CardTitle>
          </div>
          <CardDescription>Notification and alert settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">Alert Thresholds</div>
              <div className="text-sm text-muted-foreground">Risk level settings</div>
            </div>
            <Button variant="outline" size="sm">Adjust</Button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">Distribution Lists</div>
              <div className="text-sm text-muted-foreground">Alert recipients</div>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsTab;
