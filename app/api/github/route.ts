export async function GET() {
  try {
    const username = 'DOMINICLUCKY';
    
    // Fetch user data
    const userResponse = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
    });
    
    if (!userResponse.ok) {
      throw new Error('Failed to fetch user data');
    }
    
    const userData = await userResponse.json();
    
    // Fetch repositories to calculate stars and contributions
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=stars&order=desc`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );
    
    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repos');
    }
    
    const repos = await reposResponse.json();
    
    // Calculate total stars
    const totalStars = repos.reduce((sum: number, repo: any) => sum + (repo.stargazers_count || 0), 0);
    
    // Calculate total contributions (approximate from public repos)
    const totalRepos = userData.public_repos || 0;
    
    return Response.json({
      username: userData.login,
      name: userData.name,
      bio: userData.bio,
      followers: userData.followers,
      following: userData.following,
      publicRepos: totalRepos,
      totalStars,
      profileUrl: userData.html_url,
      avatar: userData.avatar_url,
      location: userData.location,
      success: true,
    });
  } catch (error) {
    console.error('GitHub API error:', error);
    return Response.json(
      { success: false, error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}
