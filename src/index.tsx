import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import OrdersPage from "@/pages/orders"
import ProductsPage from "@/pages/products"
import PlaygroundPage from "@/pages/playground"
// import TestPage from "@/pages/test"
import "./globals.css"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/orders" replace />} />
                <Route path="/orders" element={<OrdersPage />} />
                {/* <Route path="/test" element={<TestPage />} /> */}
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/playground" element={<PlaygroundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

// Mount the app
const container = document.getElementById("root")
if (container) {
    const root = createRoot(container)
    root.render(<App />)
} else {
    console.error("Root element not found")
}
