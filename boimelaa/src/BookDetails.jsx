import PropTypes from "prop-types"; // 1.4k (gzipped: 776)

function BookDetails({ title, author }) {
  // ekhane object destructuring use kora hoise.
  return (
    <div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{author}</p>
    </div>
  );
}

BookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookDetails;
