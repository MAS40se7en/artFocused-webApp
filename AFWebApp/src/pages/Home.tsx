import { useEffect, useState } from "react"

export default function Home() {
    const [name, setName] = useState('');
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://127.0.0.1:8000/api/user', {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                    
                });

                const content = await response.json();

                setName(content.name);
            }
        )();
    });
  return (
    <div>
      Hi {name}
    </div>
  )
}