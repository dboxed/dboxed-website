'use client';

import Link from 'next/link';
import { FaXTwitter, FaGithub } from 'react-icons/fa6';
import { showPreferences } from 'vanilla-cookieconsent';

export default function FooterContent() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 py-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} codablock UG. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/imprint" className="text-sm text-gray-500 hover:text-gray-900">
            Imprint
          </Link>
          <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
            Data Privacy
          </Link>
          <button
            onClick={() => {
              showPreferences();
            }}
            className="text-sm text-gray-500 hover:text-gray-900 cursor-pointer"
          >
            Cookie Preferences
          </button>
          <div className="flex items-center gap-3 ml-2">
            <Link
              href="https://x.com/dboxed_io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="Twitter"
            >
              <FaXTwitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com/dboxed/dboxed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 