import sys
from PyQt6.QtWidgets import QApplication, QWidget, QLabel, QDialog
import wind_Test

class MainDialog(QDialog,wind_Test.Ui_ADASDASDASD):
    def __init__(self,parent=None):
        super(MainDialog,self).__init__(parent)
        self.setupUi(self)
    
    def velkommen(self):
        self.lb_res.setText("Velkommen " + self.le_navn.toPlainText())

app = QApplication(sys.argv)
form = MainDialog()
form.show()
app.exec()
