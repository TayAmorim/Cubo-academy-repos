import './styles.css';

function Avatar({ image, size }) {
  const sizeAvatar = size || 147;

  return (
    <img
      src={image}
      alt="avatar"
      className='avatar'
      style={{ width: `${sizeAvatar}px`, height: `${sizeAvatar}px` }}
    />
  )
}
export default Avatar;