export async function GET() {
  try {
    // LinkedIn profile URL
    const linkedinProfile = {
      username: 'adarsh-mund-443139353',
      profileUrl: 'https://www.linkedin.com/in/adarsh-mund-443139353',
      name: 'Adarsh Mund',
      title: 'Full-Stack Developer',
      location: 'Bhubaneswar, India',
      success: true,
    };

    return Response.json(linkedinProfile);
  } catch (error) {
    console.error('LinkedIn API error:', error);
    return Response.json(
      { success: false, error: 'Failed to fetch LinkedIn data' },
      { status: 500 }
    );
  }
}
