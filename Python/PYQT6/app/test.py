from PyQt6.QtWidgets import QApplication, QWidget, QLabel
from PyQt6.QtGui import QIcon,QPixmap,QMovie
import sys

class Window(QWidget):
    def __init__(self):
        super().__init__()
        self.setGeometry(200,200,700,400)
        self.setWindowTitle("NOOB")
        self.setWindowIcon(QIcon("./icon.png"))

        #label = QLabel("Hello",self)
        #label.setText("Bye")
        #label.clear()

        #label = QLabel(self)
        #pixmap = QPixmap("./icon.png")
        #label.setPixmap(pixmap)

        #label = QLabel(self)
        #movie = QMovie("./jews.gif")
        #label.setMovie(movie)
        #movie.start()


app = QApplication(sys.argv)
window = Window()
window.show()
sys.exit(app.exec())