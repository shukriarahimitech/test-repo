
// This function fetches universities from an external API
export async function getUniversities(): Promise<any> {
    try {
        const response = await fetch('https://api.example.com/universities');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching universities:', error);
        throw error; // Rethrow the error for further handling
    }
}

// This function returns mock data for testing
export function getUniversitiesTesting(): any {
    return [
        { name: 'University A', location: 'Location A' },
        { name: 'University B', location: 'Location B' },
        { name: 'University C', location: 'Location C' }
    ];
}

// You can also have a default export
export default getUniversities;
