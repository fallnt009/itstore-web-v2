import Avatar from '../../../components/ui/Avatar';

export default function AuthToggle({authenUser, onClick}) {
  return (
    <div onClick={onClick}>
      {authenUser ? (
        <>
          <Avatar size={50} src={authenUser.profileImage} />
        </>
      ) : (
        <>
          <Avatar size={50} />
        </>
      )}
    </div>
  );
}
