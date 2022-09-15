import { useParams, Link } from "react-router-dom";

const data = {
  yehoon: {
    name: "강예훈",
    description: "배고프다",
  },
  geunsoo: {
    name: "김근수",
    description: "저도요",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.user];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <Link to="/">Home 바로가기</Link>
        </div>
      ) : (
        <>
          <p>존재하지 않는 프로필입니다</p>
          <Link to="/">Home 바로가기</Link>
        </>
      )}
    </div>
  );
};

export default Profile;
