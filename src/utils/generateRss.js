const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const getAllPosts = () => {
  const filenames = fs.readdirSync(path.join('./src/posts'));

  const posts = filenames.map((filename) => {
    const filepath = path.join('./src/posts', filename);
    const markdownWithMeta = fs.readFileSync(filepath, 'utf-8');
    const { data } = matter(markdownWithMeta);

    return {
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      link: 'https://adrianayala.mx./' + filename.replace('.md', ''),
    };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const getXmlItems = (blogPosts) => {
  return blogPosts
    .map((post) => {
      return `
        <item>
          <title>${post.title}</title>
          <link>${post.link}</link>
          <guid>${post.link}</guid>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <description>${post.excerpt}</description>
          <dc:creator>Adrian Ayala</dc:creator>
        </item>
      `;
    })
    .join('');
};

const getRssXml = (xmlItems, latestPostDate) => {
  return `<?xml version="1.0" ?>
    <rss
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:content="http://purl.org/rss/1.0/modules/content/"
      xmlns:atom="http://www.w3.org/2005/Atom"
      version="2.0"
    >
      <channel>
        <title>Adrian (Sin Acento) Ayala</title>
        <link>https://adrianayala.mx</link>
        <description>Hago café y guiones para cómic.</description>
        <language>es</language>
        <lastBuildDate>${new Date(latestPostDate).toUTCString()}</lastBuildDate>
        ${xmlItems}
      </channel>
    </rss>`;
};

const postData = getAllPosts();
const xmlItems = getXmlItems(postData);
const rssXml = getRssXml(xmlItems, postData[0].date);

fs.writeFile(path.join('public', 'rss.xml'), rssXml, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('RSS feed written successfully');
  }
});
