export async function getHeaderImage() {
  try {
    const apiLink = import.meta.env.VITE_API_LINK; // Accessing the environment variable
    const headerImageRes = await fetch(`${apiLink}/header_image`);
    if (!headerImageRes.ok) {
      throw new Error("Network response was not ok");
    }
    const headerImage = await headerImageRes.json();
    return headerImage;
  } catch (error) {
    console.error("Failed to fetch header image:", error);
    return null;
  }
}

// You can add more API functions here as needed
