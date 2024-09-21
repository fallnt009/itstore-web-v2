import Avatar from '../../../components/ui/Avatar';

export default function AuthToggle({authenUser, onClick}) {
  return (
    <div onClick={onClick}>
      {authenUser ? (
        <>
          <Avatar size={48} src={authenUser.profileImage} />
        </>
      ) : (
        <>
          <Avatar size={48} />
        </>
      )}
    </div>
  );
}
