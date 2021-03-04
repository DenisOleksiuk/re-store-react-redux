import { BookstoreServiceConsumer } from '../bookstore-service-context'

const withBookstoreSrvice = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (
              <Wrapped {...props} bookstoreService={bookstoreService} />
            )
          }
        }
      </BookstoreServiceConsumer>
    )
  }
};

export default withBookstoreSrvice;
