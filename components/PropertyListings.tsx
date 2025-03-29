"use client";  // Add this at the very top
import React, { useEffect } from "react";
import styles from "./PropertyListings.module.css";

const PropertyListings: React.FC = () => {
  useEffect(() => {
    // Ensure Instagram embed script loads once
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Property Listings</h2>

      <div className={styles.embedContainer}>
        {/* First Instagram post */}
        <blockquote
          className={`instagram-media ${styles.blockquote}`}
          data-instgrm-permalink="https://www.instagram.com/reel/DHoTttFthOS/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        ></blockquote>

        {/* Second Instagram post */}
        <blockquote
          className={`instagram-media ${styles.blockquote}`}
          data-instgrm-permalink="https://www.instagram.com/reel/DG5MuEctkFT/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        ></blockquote>

{/* Third Instagram post */}
<blockquote
          className={`instagram-media ${styles.blockquote}`}
          data-instgrm-permalink="https://www.instagram.com/reel/DGuy166thJL/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        ></blockquote>

{/* Fourth Instagram post */}
<blockquote
          className={`instagram-media ${styles.blockquote}`}
          data-instgrm-permalink="https://www.instagram.com/reel/DHKAVectscC/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        ></blockquote>

{/* Fifth Instagram post */}
<blockquote
          className={`instagram-media ${styles.blockquote}`}
          data-instgrm-permalink="https://www.instagram.com/reel/DHrIen_Nvle/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        ></blockquote>

{/* Sixth Instagram post */}
<blockquote
          className={`instagram-media ${styles.blockquote}`}
          data-instgrm-permalink="https://www.instagram.com/reel/DHRau1ktBcn/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        ></blockquote>

        {/* Add more Instagram posts here as needed */}
      </div>
    </div>
  );
};

export default PropertyListings;
