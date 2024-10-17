import React from 'react'

interface LoaderProps {
    size?: 'small' | 'medium' | 'large'
    color?: string
    className?: string
}

export const Loader: React.FC<LoaderProps> = ({
    size = 'medium',
    color = 'text-blue-600',
    className = ''
}) => {
    const sizeClasses = {
        small: 'w-6 h-6',
        medium: 'w-10 h-10',
        large: 'w-16 h-16'
    }

    return (
        <div className={`flex justify-center items-center w-screen h-screen ${className}`} role="status">
            <svg
                className={`animate-spin ${sizeClasses[size]} ${color}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
            <span className="sr-only">Cargando...</span>
        </div>
    )
}
