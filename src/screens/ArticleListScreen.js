import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

// 文章列表頁
const ArticleListScreen = (props) => {
    // 文章資料來源
    const articleListData = [
        {
            "id": 1,
            "title": "Queen, stamping on.",
            "author": "Elmore Nader",
            "genre": "Cupiditate",
            "content": "The Rabbit started violently, dropped the white kid gloves in one hand and a large fan in the distance, and she heard a little hot tea upon its forehead (the position in dancing.' Alice said; but was dreadfully puzzled by the soldiers, who of course was, how to set them free, Exactly as we were. My notion was that you had been anything near the door, she ran off as hard as it spoke. 'As wet as ever,' said Alice indignantly, and she tried to fancy what the name 'Alice!' CHAPTER XII. Alice's."
        },
        {
            "id": 2,
            "title": "And how odd the.",
            "author": "Steve Becker",
            "genre": "Delectus",
            "content": "The Queen turned angrily away from him, and said to herself, (not in a very poor speaker,' said the Caterpillar; and it set to work at once and put it more clearly,' Alice replied very readily: 'but that's because it stays the same thing,' said the Duchess; 'and the moral of that is--\"Be what you mean,' the March Hare said in a trembling voice:-- 'I passed by his garden.\"' Alice did not dare to disobey, though she felt a violent blow underneath her chin: it had fallen into a conversation. 'You."
        },
        {
            "id": 3,
            "title": "How puzzling all.",
            "author": "Nasir Stark",
            "genre": "Facere",
            "content": "Alice. 'Oh, don't bother ME,' said Alice to herself, in a very difficult game indeed. The players all played at once took up the fan and the sounds will take care of themselves.\"' 'How fond she is of yours.\"' 'Oh, I know!' exclaimed Alice, who had been found and handed back to the company generally, 'You are old,' said the Mouse, sharply and very neatly and simply arranged; the only difficulty was, that if you don't even know what a long sleep you've had!' 'Oh, I've had such a curious dream."
        },
        {
            "id": 4,
            "title": "King said to.",
            "author": "Allie Maggio",
            "genre": "Excepturi",
            "content": "Let this be a person of authority among them, called out, 'First witness!' The first question of course had to stop and untwist it. After a while, finding that nothing more happened, she decided to remain where she was, and waited. When the pie was all very well as the March Hare interrupted, yawning. 'I'm getting tired of sitting by her sister kissed her, and she tried the roots of trees, and I've tried hedges,' the Pigeon the opportunity of adding, 'You're looking for them, but they were all."
        },
        {
            "id": 5,
            "title": "Alice, 'or perhaps.",
            "author": "Therese Vandervort",
            "genre": "Excepturi",
            "content": "The Rabbit started violently, dropped the white kid gloves and a large kitchen, which was a large mushroom growing near her, she began, rather timidly, as she did not like the look of the right-hand bit to try the thing Mock Turtle in the middle of one! There ought to be seen--everything seemed to be ashamed of yourself,' said Alice, 'and those twelve creatures,' (she was obliged to say a word, but slowly followed her back to my right size to do this, so that altogether, for the pool of tears."
        },
        {
            "title": "Alice, surprised.",
            "author": "Lilly Schmeler",
            "genre": "Aspernatur",
            "content": "Alice indignantly, and she had this fit) An obstacle that came between Him, and ourselves, and it. Don't let him know she liked them best, For this must be shutting up like a frog; and both creatures hid their faces in their mouths. So they had been would have made a rush at Alice for protection. 'You shan't be beheaded!' said Alice, 'and if it had been, it suddenly appeared again. 'By-the-bye, what became of the trees had a pencil that squeaked. This of course, to begin lessons: you'd only."
        }
    ]

    return (
        <View style={styles.articleList}>
        </View>
    )
}

const styles = StyleSheet.create({
    articleList: {},
    article: {

    },
    articleTitle: {
        fontSize: 20,
        color: "#333"
    },
    articleAuthor: {
        fontSize: 16,
        color: "#888"
    },
    articleGenre: {

    },
    articleContent: {

    }
})

export default ArticleListScreen