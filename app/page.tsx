'use client';
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [ids, setIds] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchIds = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/ids');
      const result = await response.json();
      
      if (result.success) {
        setIds(result.data);
      } else {
        setError(result.error || 'Failed to fetch IDs');
      }
    } catch (err) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* Database Demo Section */}
        <div className="flex flex-col gap-4 items-center sm:items-start w-full max-w-md">
          <h2 className="text-lg font-semibold">Neon PostgreSQL Demo</h2>
          <button
            onClick={fetchIds}
            disabled={loading}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
          >
            {loading ? 'Loading...' : 'Fetch IDs from Database'}
          </button>
          
          {error && (
            <div className="text-red-600 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-md w-full">
              Error: {error}
            </div>
          )}
          
          {ids.length > 0 && (
            <div className="w-full">
              <h3 className="text-md font-medium mb-2">Database Results:</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                <pre className="text-sm">
                  {JSON.stringify(ids, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

       
      </main>
  
    </div>
  );
}
