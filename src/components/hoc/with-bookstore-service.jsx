import { BookstoreServiceConsumer } from '../bookstore-service-context'

const withBookstoreSrvice = (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstore) => {
            return (
              <Wrapped {...props} {...bookstore} />
            )
          }
        }
      </BookstoreServiceConsumer>
    )
  }
};

export default withBookstoreSrvice;
