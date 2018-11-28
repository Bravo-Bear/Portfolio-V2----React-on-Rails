class CreateMains < ActiveRecord::Migration[5.2]
  def change
    create_table :mains do |t|
      t.string :email

      t.timestamps
    end
  end
end
