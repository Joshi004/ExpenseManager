class CreateExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :expenses do |t|
      t.float :amount
      t.string :category
      t.text :description
      t.string :payement_method
      t.references :account, foreign_key: true

      t.timestamps
    end
  end
end
