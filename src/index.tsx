
import { createRoot } from 'react-dom/client';
import { Input } from './components/ui/input';
import './globals.css';

const App = () => {
    return (
        <div className="p-10 space-y-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Figma Input Component Test</h1>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold border-b pb-2">Default Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm mb-1 block text-gray-500">Default State</label>
                        <Input placeholderText="Placeholder" />
                    </div>
                    <div>
                        <label className="text-sm mb-1 block text-gray-500">Filled State</label>
                        <Input defaultValue="Input text" />
                    </div>
                    <div>
                        <label className="text-sm mb-1 block text-gray-500">Focus State (Forced)</label>
                        <Input placeholderText="Placeholder" state="Focus" />
                    </div>
                    <div>
                        <label className="text-sm mb-1 block text-gray-500">Disabled State</label>
                        <Input placeholderText="Placeholder" state="Disabled" />
                    </div>
                    <div>
                        <label className="text-sm mb-1 block text-gray-500">Error State</label>
                        <Input placeholderText="Placeholder" state="Error" />
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold border-b pb-2">Password Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm mb-1 block text-gray-500">Default State</label>
                        <Input variant="Password" placeholderText="Password" />
                    </div>
                    <div>
                        <label className="text-sm mb-1 block text-gray-500">Error State</label>
                        <Input variant="Password" placeholderText="Password" state="Error" />
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-xl font-semibold border-b pb-2">File Variant</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm mb-1 block text-gray-500">Default State</label>
                        <Input variant="File" />
                    </div>
                </div>
            </section>
        </div>
    );
};

// Mount the app
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
} else {
    console.error("Root element not found");
}
