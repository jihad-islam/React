import PropTypes from "prop-types"; // 1.4k (gzipped: 776)

function BookDetails({ title, author }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
}

BookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookDetails;
