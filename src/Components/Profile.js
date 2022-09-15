import { useParams } from "react-router-dom";

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
  // 파라미터를 가져오는 함수
  // useParams()를 사용해 Profile의 파라미터를 params에 할당했다

  // params => /profile
  const params = useParams();

  // profile = data[yehoon]
  const profile = data[params.user];
  // params.user => yehoon, geunsoo

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <>
          <p>존재하지 않는 프로필입니다</p>
        </>
      )}
    </div>
  );
};

export default Profile;
