import unittest
import calc


class TestStringMethods(unittest.TestCase):

    def test_astar(self):
        result = calc.astar((0,0), (7.6))
        self.assertEqual(result, (0, 0), (1, 1), (2, 2), (3, 3), (4, 3), (5, 4), (6, 5), (7, 6))


if __name__ == '__main__':
    unittest.main()