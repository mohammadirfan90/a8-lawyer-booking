import React from "react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      question: "What is useState and how does it work in React?",
      answer:
        "useState is a React Hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it. When the update function is called, React schedules a re-render of the component with the new state value. It's the primary way to handle dynamic data that changes over time within a component's lifecycle.",
      code: "const [count, setCount] = useState(0);",
    },
    {
      id: 2,
      question: "What is the purpose of useEffect in React?",
      answer:
        "useEffect is used for handling side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after every render by default, but you can control its execution by providing a dependency array. If the array is empty, it runs only once after the initial mount. It also supports a cleanup function to prevent memory leaks.",
      code: "useEffect(() => {\n  fetchData();\n  return () => cleanup();\n}, [dependency]);",
    },
    {
      id: 3,
      question: "What is a custom hook in React and when should you use one?",
      answer:
        "A custom hook is a JavaScript function whose name starts with 'use' and that can call other hooks. They are used to extract and reuse stateful logic across multiple components without adding more components to your tree. You should use them when you find yourself repeating the same hook-related logic (like fetching data or handling forms) in different parts of your application.",
      code: "function useWindowSize() {\n  const [size, setSize] = useState(window.innerWidth);\n  // ... hook logic\n  return size;\n}",
    },
    {
      id: 4,
      question:
        "Difference between controlled and uncontrolled components. Which one is better?",
      answer:
        "Controlled components are those where form data is handled by a React component's state. Uncontrolled components store their own state internally and you access it using refs. Controlled components are generally considered better because they offer more control over validation, conditional disabling, and data flow, making the UI more predictable and easier to debug.",
      code: "// Controlled\n<input value={name} onChange={e => setName(e.target.value)} />\n\n// Uncontrolled\n<input ref={inputRef} />",
    },
    {
      id: 5,
      question: "Tell us something about useFormStatus() in React.",
      answer:
        "useFormStatus is a newer hook (often used with React Actions/Server Components) that provides status information of the last form submission. it returns an object with properties like 'pending', 'data', 'method', and 'action'. It's particularly useful for showing loading states or disabling submit buttons while a form is being processed without needing to manually manage the pending state.",
      code: "const { pending } = useFormStatus();\n<button disabled={pending}>Submit</button>",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-4 drop-shadow-sm">
            The React Blog
          </h1>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 group"
            >
              <div className="card-body p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="badge badge-primary badge-lg font-bold">
                    {post.id}
                  </div>
                  <div>
                    <h2 className="card-title text-2xl mb-4 group-hover:text-primary transition-colors">
                      {post.question}
                    </h2>
                    <p className="text-base-content/80 leading-relaxed mb-6">
                      {post.answer}
                    </p>
                  </div>
                </div>

                {/* Code Snippet Section */}
                <div className="mt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-2 px-1">
                    Quick Reference:
                  </div>
                  <div className="mockup-code bg-neutral text-neutral-content rounded-xl border border-neutral-focus">
                    <pre className="px-4">
                      <code className="text-info font-mono text-sm md:text-base whitespace-pre-wrap">
                        {post.code}
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="card-actions justify-end mt-6">
                  <div className="badge badge-outline gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-4 h-4 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    Topic {post.id}
                  </div>
                  <div className="badge badge-ghost text-xs opacity-50">
                    2 min read
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
