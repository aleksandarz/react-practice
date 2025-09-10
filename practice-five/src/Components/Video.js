import { useParams } from "react-router-dom";
import videos from "../videos.json";

const Video = () => {

  const { videoId } = useParams();
  console.log(videoId);

  const video = videos.find(video => video.videoId === parseInt(videoId));
  console.log(video);

  return (
    <>
      <div>
        <a href={video.videoUrl}>
          <img src={video.videoImage} alt={video.videoTitle}
               className="rounded-[0.5rem] h-[220px] w-[400px]"/>
          <h1 className="text-2xl font-bold mt-2 mb-2">{video.videoTitle}</h1>
        </a>
      </div>
    </>
  );
}

export default Video;