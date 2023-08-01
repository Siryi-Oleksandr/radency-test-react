import { AiOutlineBulb, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaHeadSideVirus } from 'react-icons/fa';

type Category = 'Task' | 'Random Thought' | 'Idea';

export function getIcon(category: Category): JSX.Element {
  switch (category) {
    case 'Task':
      return <AiOutlineShoppingCart />;
    case 'Random Thought':
      return <FaHeadSideVirus />;
    case 'Idea':
      return <AiOutlineBulb />;

    default:
      return <AiOutlineBulb />;
  }
}
