import { useTheme } from '@/pages/ThemeProvider';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Settings() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <h1 className="text-3xl font-bold">Settings</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Appearance</CardTitle>
                    <CardDescription>
                        Customize the appearance of the app. Automatically switch between day
                        and night themes.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="grid grid-cols-3 gap-4">
                        <Select defaultValue={theme} onValueChange={(value) => setTheme(value as 'light' | 'dark' | 'system')}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="outline" onClick={() => setTheme('light')}>Light</Button>
                        <Button variant="outline" onClick={() => setTheme('dark')}>Dark</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
