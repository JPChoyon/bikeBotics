"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-gray-900">
      <Image
        src="/images/404.png" 
        alt="404 Not Found"
        width={400}
        height={400}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/">
        <Button className="text-white bg-primary hover:bg-primary/80">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
}
